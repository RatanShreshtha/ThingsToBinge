import useFetchWithCache from './useFetchWithCache';

import { Genre } from '~~/types/portal';

export default (typeSlug: string) => useFetchWithCache<Genre[]>(`/api/genres/${typeSlug}`);
