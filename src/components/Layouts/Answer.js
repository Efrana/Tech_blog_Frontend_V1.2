import React, { Component } from 'react';
class Answer extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <p class="answer_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum esse illum modi
                        a? Reprehenderit amet, blanditiis itaque molestiae minima error quaerat laboriosam,
                        animi debitis possimus ad, eum hic voluptas est eaque. Autem nulla totam cupiditate non.
                        Molestias necessitatibus repellat sunt excepturi expedita, nulla nihil minima, magni
                        totam inventore corporis.
							                    </p>
                    <div class="share_div">
                        <a href="#" class="share_btn">share</a>
                        <a href="#" class="share_btn">edit</a>
                        <a href="#" class="share_btn">delete</a>
                        <div class="poster_div">
                            <p class="poster_para">answered 3 mins ago</p>
                            <img src="img/profile.jpg" class="img_div" />
                            <p class="poster_para2">jamie William</p>
                        </div>
                    </div>
                    {/* <Comment /> */}
                </div>
            </React.Fragment>
        )
    }

}
export default Comment