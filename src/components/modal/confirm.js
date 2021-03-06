import React from 'react';
import classnames from 'classnames';
import Modal from './modal';
import XIcon from '../icon';
import XBtn from '../button';

import Header from './header';
import Body from './body';
import Footer from './footer';

function Confirm(props) {


    // const { data } = props;
    const {data, confirm, cancel} = props;

    return (
        <div className="x-modal-confirm">
            <Header key="Header" {...props}></Header>
            <Body key="Body">
                <h4 className="title"><XIcon type={data.tipsIcon} />{data.tipsTitle}</h4>
                <div className="content">{data.content}</div>
            </Body>
            <Footer key="Footer">
                <XBtn type={data.CancelType} size={data.btnSzie} onClick={() => {
                    cancel();
                }}>{data.cancelText}</XBtn>
                <XBtn type={data.ConfirmType} size={data.btnSzie} onClick={() => {
                    confirm();
                }}>{data.confirmText}</XBtn>
            </Footer>
        </div>
    );
}

export default (opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('x-modal-confirm', opt.className),
        data: {
            tipsTitle: opt.tipsTitle || '系统提示', //标题
            content: opt.content || '您确定要执行此操作吗？', //内容
            ConfirmType: opt.ConfirmType || 'primary', //确认框类型
            CancelType: opt.CancelType || 'default', //取消按钮类型
            btnSzie: opt.btnSzie || 'md', //按钮大小
            confirmText: opt.confirmText || '确定', //确认按钮文案
            cancelText: opt.cancelText || '取消', //取消按钮文案
            tipsIcon: opt.tipsIcon || 'question', //提示icon
            isDisplayConfirm: opt.isDisplayConfirm || true, //是否展示确认按钮
            isDisplayCancel: opt.isDisplayCancel || true, //是否展示取消按钮
        }
    };

    return Modal(Confirm, _opt)
}
