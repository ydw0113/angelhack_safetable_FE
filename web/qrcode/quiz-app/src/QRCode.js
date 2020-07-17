import React from 'react';
var QRCodeReact = require('qrcode.react'); // https://www.npmjs.com/package/qrcode.react


class QRCode extends React.Component {
    state = {
        value: '',
        size: 128,
        fgColor: '#000000',
        bgColor: '#ffffff',
        level: 'L',
        renderAs: 'svg',
        includeMargin: false,
        includeImage: true,
        imageH: 24,
        imageW: 24,
        imageX: 0,
        imageY: 0,
        //   imageSrc: 'https://static.zpao.com/favicon.png',
        imageExcavate: true,
        centerImage: true,
    };

    render() {
        
        return (
            <div>
                <div>
                    <label>
                        Value:
              <br />
                        <textarea
                            rows="6"
                            cols="80"
                            onChange={(e) => this.setState({ value: e.target.value })}
                            value={this.state.value}
                        />
                    </label>
                </div>
                <div>
                    <QRCodeReact
                        value={this.state.value}
                        size={this.state.size}
                        fgColor={this.state.fgColor}
                        bgColor={this.state.bgColor}
                        level={this.state.level}
                        renderAs={this.state.renderAs}
                        includeMargin={this.state.includeMargin}
                    //               imageSettings={
                    //                   this.state.includeImage
                    //                       ? {
                    //                           src: this.state.imageSrc,
                    //                           height: this.state.imageH,
                    //                           width: this.state.imageW,
                    //                           x: this.state.centerImage ? null : this.state.imageX,
                    //                           y: this.state.centerImage ? null : this.state.imageY,
                    //                           excavate: this.state.imageExcavate,
                    //                       }
                    //                       : null
                    //               }
                    />
                </div>
            </div>
        )
    };
}
export default QRCode;