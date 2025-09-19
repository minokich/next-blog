/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');

const SECRET = 'supersecret';

const path = require('path');
const DATA_FILE = path.resolve(__dirname, 'users.json');

let users = [];

// サーバー起動時に読み込み
if (fs.existsSync(DATA_FILE)) {
  users = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

const saveUsers = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type AuthPayload {
    token: String!
  }

  type Query {
    me: User
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    email: String!
    password: String!
    name: String!
  }

  type Mutation {
    login(input: LoginInput!): AuthPayload
    signup(input: SignupInput!): AuthPayload
  }
`;

const resolvers = {
  Query: {
    me: (_, __, { requireUser }) => {
      const user = requireUser();
      return users.find((u) => u.id === user.id);
    },
  },
  Mutation: {
    login: (_, { input }) => {
      const { email, password } = input;
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );
      if (!user) throw new Error('Invalid credentials');
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
      return { token };
    },
    signup: (_, { input }) => {
      const { email, password, name } = input;
      const role = 'USER';
      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        throw new Error('すでに登録されているメールアドレス');
      }

      const newUser = {
        id: String(users.length + 1),
        email,
        password,
        name,
        role,
      };

      users.push(newUser);
      saveUsers();

      const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: '1h' });
      return { token };
    },
  },
};

const getUserFromToken = (token) => {
  try {
    if (token) {
      return jwt.verify(token, SECRET);
    }
    return null;
  } catch {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const auth = req.headers.authorization || '';
    const token = auth.replace('Bearer ', '');
    const user = getUserFromToken(token);

    return {
      user, // null の場合あり
      requireUser: () => {
        if (!user) throw new Error('Not authenticated');
        return user;
      },
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
