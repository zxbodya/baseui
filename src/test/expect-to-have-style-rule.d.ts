declare const toHaveStyleRule: (actual: unknown, ...args: any[]) => {
    pass: boolean;
    message: () => any;
};
export default toHaveStyleRule;
