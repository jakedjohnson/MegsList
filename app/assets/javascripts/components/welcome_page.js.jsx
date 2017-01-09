var WelcomePage = React.createClass({
  getToken() {
    var metas = document.getElementsByTagName('meta');
    for (var i=0; i<metas.length; i++) {
      if (metas[i].getAttribute('name') === 'csrf-token') {
        return metas[i].getAttribute('content');
      }
    }
  },
  handleLogin() {
    ReactDOM.render(<LoginForm token={this.getToken()}/>, document.getElementById('form-area'))
  },
  handleRegistration() {
    ReactDOM.render(<RegistrationForm token={this.getToken()}/>, document.getElementById('form-area'))
  },
  handlePassword() {
    ReactDOM.render(<PasswordForm token={this.getToken()}/>, document.getElementById('form-area'))
  },
  render: function() {
    return (
      <div className='container content-box'>
        <div className='row text-center'>
          <div className='col-sm-12'>
            <h1>MegsList</h1>
          </div>
        </div>
        <hr />
        <div className='row text-center'>
          <div className='col-sm-12'>
            <h2>Let Meg take care of it!</h2>
          </div>
          <div className='col-sm-12'>
            <p>
            Automatically search multiple Craigslist cities at once, 
            and get emails when new listings are posted.
            </p>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col-sm-12'>
            <button onClick={(e) => this.handleLogin(e)}>
              Login
            </button>
          </div>
          <div className='col-sm-12'>
            <button onClick={(e) => this.handleRegistration(e)}>
              Register
            </button>
          </div>
          <div className='col-sm-12'>
            <button onClick={(e) => this.handlePassword(e)}>
              I Forgot My Password
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12' id='form-area'>
          </div>
        </div>
      </div>
    )
  }
});
