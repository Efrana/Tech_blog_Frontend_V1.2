import React, { Component } from 'react';
class GroupListTable extends Component {
    render() {
        return (
            <React.Fragment>
          {/* <!-- post start  --> */}
                <div class="askqst_post_wrap">
                    <h3 class="ask-h3">AskQuestion</h3>
                    <div class="post_article full pull-left">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Title</label>

                                <input class="form-control" id="textInput" placeholder="title here" />
                                <small id="emailHelp" class="form-text text-muted">
                                    Be specific and imagine you’re asking a question to another person.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Body</label>
                                <textarea id="summernote" id="textInput" class=" textInput form-control text_area"
                                    name="editordata" placeholder="Body"></textarea>
                                <small id="emailHelp" class="form-text text-muted">
                                    Be specific and imagine you’re asking a question to another person.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Tags</label>
                                <br />

                                <textarea class=" textInput form-control text_area" id="textInput" name="editordata"
                                    placeholder="Tags" data-role="tagsinput"></textarea>
                                <small id="emailHelp" class="form-text text-muted">
                                    Add up to 5 tags to describe what your question is about.</small>
                            </div>
                            <button type="submit" class="btn btn-success post-btn btn_secoend">Submit</button>
                        </form>
                    </div>
                </div>
                {/* <!-- post end  --> */}

            </React.Fragment >
        )
    }

}
export default GroupListTable