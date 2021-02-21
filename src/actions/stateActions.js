export function saveState (state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tabsoluteState', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
};

export function loadState() {
    try {
      const serializedState = localStorage.getItem('tabsoluteState');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
};