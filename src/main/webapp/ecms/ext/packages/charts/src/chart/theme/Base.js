/**
 * Abstract class that provides default styles for non-specified things.
 * Should be sub-classed when creating new themes.
 * For example:
 *
 *     Ext.define('Ext.chart.theme.Custom', {
 *         extend: 'Ext.chart.theme.Base',
 *         singleton: true,
 *         alias: 'chart.theme.custom',
 *         config: {
 *             baseColor: '#ff9f00'
 *         }
 *     });
 *
 * Theme provided values will not override the values provided in an instance config.
 * However, if a theme provided value is an object, it will be merged with the value
 * from the instance config, unless the theme provided object has a '$default' key
 * set to 'true'.
 *
 * Certain chart theme configs (e.g. 'fontSize') may use the 'default' value to indicate
 * that they should inherit a value from the corresponding CSS style provided by
 * a framework theme. Additionally, one can use basic binary operators like multiplication,
 * addition and subtraction to derive from the default value, e.g. fontSize: 'default*1.3'.
 *
 * Important: the theme should not use the 'font' shorthand to specify the font of labels
 * and other text elements of a chart. Instead, individual font properties should be used:
 * 'fontStyle', 'fontVariant', 'fontWeight', 'fontSize' and 'fontFamily'.
 */
Ext.define('Ext.chart.theme.Base', {

    mixins: {
        factoryable: 'Ext.mixin.Factoryable'
    },

    requires: ['Ext.draw.Color'],

    factoryConfig: {
        type: 'chart.theme'
    },

    isTheme: true,

    config: {
        /**
         * @cfg {String/Ext.draw.Color} baseColor
         * The base color used to generate the {@link Ext.chart.AbstractChart#colors} of the theme.
         */
        baseColor: null,

        /**
         * @cfg {Array} colors
         *
         * Array of colors/gradients to be used by the theme.
         * Defaults to {@link #colorDefaults}.
         */
        colors: undefined,

        /**
         * @cfg {Object} gradients
         *
         * The gradient config to be used by series' sprites. E.g.:
         *
         *     {
         *       type: 'linear',
         *       degrees: 90
         *     }
         *
         * Please refer to the documentation for the {@link Ext.draw.gradient.Linear linear}
         * and {@link Ext.draw.gradient.Radial radial} gradients for all possible options.
         * The color {@link Ext.draw.gradient.Gradient#stops stops} for the gradients
         * will be generated by the theme based on the {@link #colors} config.
         */
        gradients: null,

        /**
         * @cfg {Object} chart
         * Theme defaults for the chart.
         * Can apply to all charts or just a specific type of chart.
         * For example:
         *
         *     chart: {
         *       defaults: {
         *         background: 'lightgray'
         *       },
         *       polar: {
         *         background: 'green'
         *       }
         *     }
         *
         * The values from the chart.defaults and chart.*type* configs (where *type* is a valid
         * chart xtype, e.g. '{@link Ext.chart.CartesianChart cartesian}' or '{@link Ext.chart.PolarChart polar}')
         * will be applied to corresponding chart configs.
         * E.g., the chart.defaults.background config will set the {@link Ext.chart.AbstractChart#background}
         * config of all charts, where the chart.cartesian.flipXY config will only set the
         * {@link Ext.chart.CartesianChart#flipXY} config of all cartesian charts.
         */
        chart: {
            defaults: {
                background: 'white'
            }
        },

        /**
         * @cfg {Object} axis
         * Theme defaults for the axes.
         * Can apply to all axes or only axes with a specific position.
         * For example:
         *
         *     axis: {
         *       defaults: {
         *         style: {strokeStyle: 'red'}
         *       },
         *       left: {
         *         title: {fillStyle: 'green'}
         *       }
         *     }
         *
         * The values from the axis.defaults and axis.*position* configs (where *position*
         * is a valid axis {@link Ext.chart.axis.Axis#position}, e.g. 'bottom') will be
         * applied to corresponding {@link Ext.chart.axis.Axis axis} configs.
         * E.g., the axis.defaults.label config will apply to the {@link Ext.chart.axis.Axis#label}
         * config of all axes, where the axis.left.titleMargin config will only apply to the
         * {@link Ext.chart.axis.Axis#titleMargin} config of all axes positioned to the left.
         */
        axis: {
            defaults: {
                label: {
                    x: 0,
                    y: 0,
                    textBaseline: 'middle',
                    textAlign: 'center',
                    fontSize: 'default',
                    fontFamily: 'default',
                    fontWeight: 'default',
                    fillStyle: 'black'
                },
                title: {
                    fillStyle: 'black',
                    fontSize: 'default*1.23',
                    fontFamily: 'default',
                    fontWeight: 'default'
                },
                style: {
                    strokeStyle: 'black'
                },
                grid: {
                    strokeStyle: 'rgb(221, 221, 221)'
                }
            },
            top: {
                style: {
                    textPadding: 5
                }
            },
            bottom: {
                style: {
                    textPadding: 5
                }
            }
        },

        /**
         * @cfg {Object} series
         * Theme defaults for the series.
         * Can apply to all series or just a specific type of series.
         * For example:
         *
         *     series: {
         *       defaults: {
         *         style: {
         *           lineWidth: 2
         *         }
         *       },
         *       bar: {
         *         animation: {
         *           easing: 'bounceOut',
         *           duration: 1000
         *         }
         *       }
         *     }
         *
         * The values from the series.defaults and series.*type* configs (where *type*
         * is a valid series {@link Ext.chart.series.Series#type}, e.g. 'line') will be
         * applied to corresponding series configs.
         * E.g., the series.defaults.label config will apply to the {@link Ext.chart.series.Series#label}
         * config of all series, where the series.line.step config will only apply to the
         * {@link Ext.chart.series.Line#step} config of {@link Ext.chart.series.Line line} series.
         */
        series: {
            defaults: {
                label: {
                    fillStyle: 'black',
                    strokeStyle: 'none',
                    fontFamily: 'default',
                    fontWeight: 'default',
                    fontSize: 'default*1.077',
                    textBaseline: 'middle',
                    textAlign: 'center'
                },
                labelOverflowPadding: 5
            }
        },

        /**
         * @cfg {Object} sprites
         * Default style for the custom chart sprites by type.
         * For example:
         *
         *     sprites: {
         *       text: {
         *         fontWeight: 300
         *       }
         *     }
         *
         * These sprite attribute overrides will apply to custom sprites of all charts
         * specified using the {@link Ext.draw.Container#sprites} config.
         * The overrides are specified by sprite type, e.g. sprites.text config
         * tells to apply given attributes to all {@link Ext.draw.sprite.Text text} sprites.
         */
        sprites: {
            text: {
                fontSize: 'default',
                fontWeight: 'default',
                fontFamily: 'default',
                fillStyle: 'black'
            }
        },

        /**
         * @private
         * An object with the following structure:
         * {
         *   fillStyle: [color, color, ...],
         *   strokeStyle: [color, color, ...],
         *   ...
         * }
         * If missing, generated from the other configs: 'baseColor, 'gradients', 'colors'.
         */
        seriesThemes: undefined,

        markerThemes: {
            type: ['circle', 'cross', 'plus', 'square', 'triangle', 'diamond']
        },

        /**
         * @deprecated Use the {@link Ext.draw.Container#gradients} config instead.
         * @since 5.0.1
         */
        useGradients: false,

        /**
         * @deprecated Use the {@link Ext.chart.AbstractChart#background} config instead.
         * @since 5.0.1
         */
        background: null
    },

    colorDefaults: [ '#94ae0a', '#115fa6', '#a61120', '#ff8809', '#ffd13e', '#a61187', '#24ad9a', '#7c7474', '#a66111' ],

    constructor: function (config) {
        this.initConfig(config);
        this.resolveDefaults();
    },

    defaultRegEx: /^default([+\-/\*]\d+(?:\.\d+)?)?$/,

    defaultOperators: {
        '*': function (v1, v2) {
            return v1 * v2;
        },
        '+': function (v1, v2) {
            return v1 + v2;
        },
        '-': function (v1, v2) {
            return v1 - v2;
        }
    },

    resolveDefaults: function () {
        var me = this;
        Ext.onReady(function () {
            var sprites = Ext.clone(me.getSprites()),
                axis = Ext.clone(me.getAxis()),
                series = Ext.clone(me.getSeries()),
                div, key, config;

            if (!me.superclass.defaults) {
                div = Ext.getBody().createChild({tag: 'div', cls: 'x-component'});
                me.superclass.defaults = {
                    fontFamily: div.getStyle('fontFamily'),
                    fontWeight: div.getStyle('fontWeight'),
                    fontSize: parseFloat(div.getStyle('fontSize')),
                    fontVariant: div.getStyle('fontVariant'),
                    fontStyle: div.getStyle('fontStyle')
                };
                div.destroy();
            }

            me.replaceDefaults(sprites.text);
            me.setSprites(sprites);

            for (key in axis) {
                config = axis[key];
                me.replaceDefaults(config.label);
                me.replaceDefaults(config.title);
            }
            me.setAxis(axis);

            for (key in series) {
                config = series[key];
                me.replaceDefaults(config.label);
            }
            me.setSeries(series);
        });
    },

    replaceDefaults: function (target) {
        var me = this,
            defaults = me.superclass.defaults,
            defaultRegEx = me.defaultRegEx,
            key, value, match, binaryFn;

        if (Ext.isObject(target)) {
            for (key in defaults) {
                match = defaultRegEx.exec(target[key]);
                if (match) {
                    value = defaults[key];
                    match = match[1];
                    if (match) {
                        binaryFn = me.defaultOperators[match.charAt(0)];
                        value = Math.round(binaryFn(value, parseFloat(match.substr(1))));
                    }
                    target[key] = value;
                }
            }
        }
    },

    applyBaseColor: function (baseColor) {
        var midColor, midL;
        if (baseColor) {
            midColor = baseColor.isColor ? baseColor : Ext.draw.Color.fromString(baseColor);
            midL = midColor.getHSL()[2];
            if (midL < 0.15) {
                midColor = midColor.createLighter(0.3);
            } else if (midL < 0.3) {
                midColor = midColor.createLighter(0.15);
            } else if (midL > 0.85) {
                midColor = midColor.createDarker(0.3);
            } else if (midL > 0.7) {
                midColor = midColor.createDarker(0.15);
            }
            this.setColors([
                midColor.createDarker(0.3).toString(),
                midColor.createDarker(0.15).toString(),
                midColor.toString(),
                midColor.createLighter(0.12).toString(),
                midColor.createLighter(0.24).toString(),
                midColor.createLighter(0.31).toString()
            ]);
        }
        return baseColor;
    },

    applyColors: function (newColors) {
        return newColors || this.colorDefaults;
    },

    updateUseGradients: function (useGradients) {
        if (useGradients) {
            this.updateGradients({
                type: 'linear',
                degrees: 90
            });
        }
    },

    updateBackground: function (background) {
        if (background) {
            var chart = this.getChart();
            chart.defaults.background = background;
            this.setChart(chart);
        }
    },

    updateGradients: function (gradients) {
        var colors = this.getColors(),
            items = [], gradient,
            midColor, color,
            i, ln;

        if (Ext.isObject(gradients)) {
            for (i = 0, ln = colors && colors.length || 0; i < ln; i++) {
                midColor = Ext.draw.Color.fromString(colors[i]);
                if (midColor) {
                    color = midColor.createLighter(0.15).toString();
                    gradient = Ext.apply(Ext.Object.chain(gradients), {
                        stops: [
                            {
                                offset: 1,
                                color: midColor.toString()
                            },
                            {
                                offset: 0,
                                color: color.toString()
                            }
                        ]
                    });
                    items.push(gradient);
                }
            }
            this.setColors(items);
        }
    },

    applySeriesThemes: function (newSeriesThemes) {
        // Init the 'colors' config with solid colors generated from the 'baseColor'.
        this.getBaseColor();
        // Init the 'gradients' config with a hardcoded value, if the legacy 'useGradients'
        // config was set to 'true'. This in turn updates the 'colors' config.
        this.getUseGradients();
        // Init the 'gradients' config normally. This also updates the 'colors' config.
        this.getGradients();
        var colors = this.getColors(); // Final colors.
        if (!newSeriesThemes) {
            newSeriesThemes = {
                fillStyle: Ext.Array.clone(colors),
                strokeStyle: Ext.Array.map(colors, function (value) {
                    var color = Ext.draw.Color.fromString(value.stops ? value.stops[0].color : value);
                    return color.createDarker(0.15).toString();
                })
            };
        }
        return newSeriesThemes;
    }

});
