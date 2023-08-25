export const getPlayer = async (args) => {
    // Use IPC API to query Electron's main thread and run this method
    const result = await window.electron.getPlayer(args);
    return result;
};

export const postPlayer = async (args) => {
    // Use IPC API to query Electron's main thread and run this method
    const result = await window.electron.postPlayer(args);
    return result;
};
