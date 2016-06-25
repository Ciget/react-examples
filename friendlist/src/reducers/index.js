export default function SampleReducer(state = {}, action) {
  switch (action.type) {
    case 'ds':
      return {};
    default:
      return state;
  }
}
