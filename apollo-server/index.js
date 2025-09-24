/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');

const SECRET = 'supersecret';

const path = require('path');
const USERS_FILE = path.resolve(__dirname, 'users.json');
const NOTIFICATIONS_DATA_FILE = path.resolve(__dirname, 'notifications.json');
let users = [];
let notifications = [];

// サーバー起動時に読み込み
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
}
if (fs.existsSync(NOTIFICATIONS_DATA_FILE)) {
  notifications = JSON.parse(fs.readFileSync(NOTIFICATIONS_DATA_FILE, 'utf-8'));
}

const saveUsers = () => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};
const saveNotifications = () => {
  fs.writeFileSync(
    NOTIFICATIONS_DATA_FILE,
    JSON.stringify(notifications, null, 2),
  );
};

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type AdminData {
    systemLogs: [String!]!
    secretStats: String!
  }

  type Notification {
    id: ID!
    message: String!
    read: Boolean!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
  }

  type Query {
    me: User
    adminData: AdminData!
    myNotifications: [Notification!]!
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
    markNotificationAsRead(id: ID!): Notification!
  }
`;

const resolvers = {
  Query: {
    me: (_, __, { requireUser }) => {
      const user = requireUser();
      return users.find((u) => u.id === user.id);
    },
    adminData: (_, __, { user }) => {
      if (user?.role !== 'ADMIN') {
        throw new Error('Forbidden: ADMIN role required');
      }
      return {
        systemLogs: ['log1', 'log2'],
        secretStats: 'admin-only-metrics',
      };
    },
    myNotifications: (_, __, { user }) => {
      if (!user) throw new Error('Not authenticated');
      return notifications.filter((n) => n.userId === user.id);
    },
  },
  Mutation: {
    login: (_, { input }) => {
      const { email, password } = input;
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );
      if (!user) throw new Error('Invalid credentials');
      const token = jwt.sign({ id: user.id, role: user.role }, SECRET, {
        expiresIn: '1h',
      });
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

      const token = jwt.sign({ id: newUser.id, role: newUser.role }, SECRET, {
        expiresIn: '1h',
      });
      return { token };
    },
    markNotificationAsRead: (_, { id }, { requireUser }) => {
      const user = requireUser();
      const notification = notifications.find(
        (n) => n.id === id && n.userId === user.id,
      );
      if (!notification) {
        throw new Error('Notification not found or not yours');
      }
      notification.read = true;
      saveNotifications();
      return notification;
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
