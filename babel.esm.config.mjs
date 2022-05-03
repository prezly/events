export default {
    targets: {
        esmodules: true,
        node: '12',
    },
    presets: [
        '@babel/typescript',
        ['@babel/env', { useBuiltIns: false, modules: false, shippedProposals: true }],
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['babel-plugin-add-import-extension', { extension: 'mjs' }],
    ],
};
