export const loadStories: any = () => {
    const req: any = require.context('../../../../packages/modul-components/src', true, /\.stories\.ts$/);
    req.keys().forEach(filename => req(filename));
};
