import React from "react";

/**
 * Prevents an asyncronous function from being called until the previous call has completed.
 * @param callback - The asyncronous function to call.
 * @returns A deduped function that will prevent that can be used in place of the original function, but which will ignore all but calls until the current process has completed.
 */
export function useDedup(callback: () => Promise<void>) {
  const [_, setPending] = React.useState<boolean>(false);

  const dedup = () => {
    setPending((isPending) => {
      if (isPending) {
        return true;
      }
      callback().finally(() => setPending(false));
      return true;
    });
  };

  return dedup;
}
