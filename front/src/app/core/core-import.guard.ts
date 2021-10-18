export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`Module ${moduleName} has already been added. Just add it to Core Module .`);
  }
}
