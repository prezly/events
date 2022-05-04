export default {
    targets: {
        esmodules: false,
        node: '12',
    },
    presets: [
        '@babel/typescript',
        ['@babel/env', { useBuiltIns: false, modules: 'commonjs', shippedProposals: true }],
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['babel-plugin-add-import-extension', { extension: 'cjs' }],
    ],
};
