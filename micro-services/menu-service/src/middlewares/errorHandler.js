const errorHandler = (err, req, res, next) => {
  console.error("Menu Service issue");
  res.status(err.status || 500).json({
    message: err.message || "Interval server error",
  });
};

module.exports = errorHandler;
