import React, { PropTypes } from 'react';
import './style.less';

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        addSubreddit: '',
      },
    };

    // NO SENSE, BUT NEEDED FOR EVERY CLASS METHOD CALLED IN RENDER!
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSubreddit = this.onChangeSubreddit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onAddSubreddit(this.state.form.addSubreddit);
    this.setState({
      form: {
        addSubreddit: '',
      },
    });
  }

  onChangeSubreddit(e) {
    if (e.target.value) {
      this.props.onChangeSubreddit(e.target.value);
    }
  }

  onFormChange(e) {
    const newForm = Object.assign({}, this.state.form);
    newForm[e.target.name] = e.target.value;

    const newState = Object.assign({}, this.state, { form: newForm });
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="options form">
        <div className="form-group row">
          <div className="col-sm-12"><label>Digite o nome do subreddit:</label></div>
          <div className="col-sm-8">
            <input
              name="addSubreddit"
              className="form-control"
              type="text"
              value={this.state.form.addSubreddit}
              onChange={this.onFormChange}
              placeholder="subreddit"
            />
          </div>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-block btn-primary col-md-4">Adicionar</button>
          </div>
        </div>
        <div className="form-group">
          <label>Selecione o subreddit para carregar os posts:</label>
          <select
            className="form-control"
            onChange={this.onChangeSubreddit}
            value={this.props.selectedSubreddit}>
            <option value="">Selecione...</option>
            {
              this.props.subreddits.map((subreddit) => {
                return (
                  <option key={subreddit} value={subreddit}>{subreddit}</option>
                );
              })
            }
          </select>
        </div>
      </form>
    );
  }
}

Options.propTypes = {
  onAddSubreddit: PropTypes.func.isRequired,
  onChangeSubreddit: PropTypes.func.isRequired,
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
};

export default Options;
