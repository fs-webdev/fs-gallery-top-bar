module.exports = {
  plugins: {
    istanbul: {
      dir: "./coverage",
      reporters: [
        "text-summary", "lcov"
      ],
      exclude: [],
      include: [
        "**/birch-gallery-top-bar.html"
      ],
    }
  }
}