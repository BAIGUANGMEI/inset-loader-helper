class PlatformOverridePlugin {
    //自定义平台
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        let platform = process.env.VUE_APP_PLATFORM;

        compiler.hooks.beforeRun.tap('PlatformOverridePlugin', (compilation) => {
            if (process.env.VUE_APP_PLATFORM !== this.options) {
                process.env.VUE_APP_PLATFORM = this.options;
                console.log('Before compile platform set ' + platform + ' to ' + this.options);
            }
        });

        compiler.hooks.environment.tap('PlatformOverridePlugin', () => {
            if (process.env.VUE_APP_PLATFORM !== this.options) {
                process.env.VUE_APP_PLATFORM = this.options;
                console.log('Before compile platform set ' + platform + ' to ' + this.options);
            }
        });

        compiler.hooks.beforeCompile.tap('PlatformOverridePlugin', () => {
            if (process.env.VUE_APP_PLATFORM !== this.options) {
                process.env.VUE_APP_PLATFORM = this.options;
                console.log('Before compile platform set ' + platform + ' to ' + this.options);
            }
        });

        compiler.hooks.afterCompile.tap('PlatformOverridePlugin', () => {
            process.env.VUE_APP_PLATFORM = platform;
            console.log('After compile platform reset'+platform);
        });
    }
}

module.exports = PlatformOverridePlugin;
