export default () => ({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader'
    }
  ]
})
