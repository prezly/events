export default {
    targets: {
        esmodules: true,
        node: '12',
    },
    presets: [
        '@babel/typescript',
        ['@babel/env', { useBuiltIns: false, modules: false }],
    ],
    plugins: [
        ['babel-plugin-add-import-extension', { extension: 'mjs' }],
    ],
};