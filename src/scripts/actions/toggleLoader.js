
export const ACTION_TOGGLE_LOADER = 0;

export default (showLoader) => {
  return { type: ACTION_TOGGLE_LOADER, showLoader };
};
