import { Track } from './track';

export class Album{
  id: number;
  name: string;
  image: string;
  tracks?: Track[];
}
