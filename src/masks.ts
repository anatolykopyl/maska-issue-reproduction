export const importedOptions = {
  preProcess: (val: string) => val.replace(/[$,]/g, ""),
  postProcess: (val: string) => {
    if (!val) return "";

    const sub = 3 - (val.includes(".") ? val.length - val.indexOf(".") : 0);

    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    })
      .format(val as any)
      .slice(0, sub ? -sub : undefined);
  }
};
