export const PAGE_LOADING = 'PAGE_LOADING';

export function pageLoadingAction(loading) {
  return {
    type: PAGE_LOADING,
    payload: {
      loading,
    },
  };
}
