const { watch } = require("gulp");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { browsersync } = require("./serv");

const watchTask = () => {
	watch("./index.html", (cb) => {
		browsersync.reload();
		cb();
	});
	watch("./src/styles/*.scss", styles);
	watch("./src/js/*.js", scripts);
};

exports.watch = watchTask;
