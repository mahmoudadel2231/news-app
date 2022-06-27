import adapter from './adapter';

const adapterSelectors = adapter.getSelectors((state: any) => state.movies);

const selectors = {...adapterSelectors};

export default selectors;
