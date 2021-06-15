let importALL = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importALL(require.context('./icons/', true, /\.svg$/))
} catch (err) {
    console.log(err);
}