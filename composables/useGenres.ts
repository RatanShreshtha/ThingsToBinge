import { Genre } from '~~/types/portal';
import useFetchWithCache from './useFetchWithCache';

export default (typeSlug: string) => useFetchWithCache<Genre[]>(`/api/genres/${typeSlug}`);
