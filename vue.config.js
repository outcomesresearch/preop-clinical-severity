const webpackParams = {
  title: 'Clinical Severity Staging System Calculator',
  description:
    'Calculate the Clinical Severity Staging System category (alpha, beta, gamma, or delta) from Functional Severity, Comorbidity, Preop weight loss, and TNM Stage values.',
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/preop-clinical-severity/',
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/preop-clinical-severity/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value
      })
      return args
    })
  },
}
