export default function (state = {}, action) {
  switch (action.type) {
    case 'ds':
      return {};
    default:
      return state;
  }
}
