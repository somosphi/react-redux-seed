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
  }

  onChangeSubreddit(e) {
    this.props.onChangeSubreddit(e.target.value);
  }

  onFormChange(e) {
    let newForm = Object.assign({}, this.state.form);
    newForm[e.target.name] = e.target.value;

    const newState = Object.assign({}, this.state, { form: newForm });
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="options">
        Adicionar: <input name="addSubreddit" type="text" value={this.state.form.addSubreddit} onChange={this.onFormChange} />

        <select onChange={this.onChangeSubreddit} value={this.props.selectedSubreddit}>
          {
            this.props.subreddits.map((subreddit) => {
              return (
                <option key={subreddit} value={subreddit}>{subreddit}</option>
              );
            })
          }
        </select>

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
