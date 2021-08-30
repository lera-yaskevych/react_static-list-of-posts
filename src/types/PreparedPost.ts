import { User } from './User';
import { Comment } from './Comment';

export interface PreparedPost {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | null,
  writtenComments: Comment[],
}