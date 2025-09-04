import { redirect } from 'next/navigation';

export default function ArticlesIndex() {
  redirect('/articles/page/1');
}
