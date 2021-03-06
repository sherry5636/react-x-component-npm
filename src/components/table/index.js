import React, { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import XPagination from '../pagination';
import XIcon from '../icon';
import XLoading from '../loading';

const OrderArea = (props) => {
    const [isUp, setIsUp] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const upClick = () => {
        setIsUp(()=>{
            props.onOrderChange({
                type: !isUp ? 'up' : null,
                key: props.keyCode
            })
            return !isUp;
        });
        setIsDown(false);
    }

    const downClick = () => {
        setIsUp(false);
        setIsDown(()=>{
            props.onOrderChange({
                type: !isDown ? 'down' : null,
                key: props.keyCode
            })
            return !isDown;
        });
    }

    return (
        <div className="order-box">
            <div className={isUp ? `order-up selected` : `order-up`}
                onClick={upClick.bind(this)}></div>
            <div className={isDown ? `order-down selected` : `order-down`}
                onClick={downClick.bind(this)}></div>
        </div>
    )
}

const XTable = (props) => {

    const { tableConf, dataList, noBorder, pageSize,currPage, count, size, noPagination, isLoading, onOrderChange, onPageChange } = props;
    const [orderName, setOrderName] = useState('');
    const [orderType, setOrderType] = useState('');

    return (
        <div className="x-table">
            {
                isLoading ? <XLoading type={'table'} /> : null
            }
            <div className={`x-table-wrapper${noBorder ? ' no-border' : ''}${size === 'small' ? ' xs' : ''}`}>
                <table>
                    <thead>
                        <tr>
                            {
                                tableConf.map((item, index) => {
                                    return (
                                        <th key={index}  style={{textAlign: item.align || 'left'}}>
                                            {item.name}
                                            {
                                                item.isOrder &&
                                                <OrderArea
                                                    keyCode={item.key}
                                                    orderName={orderName}
                                                    orderType={orderType}
                                                    onOrderChange={(res) => {
                                                        setOrderName(res.key);
                                                        setOrderType(res.type);
                                                        onOrderChange(res)
                                                    }} />
                                            }
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataList.length > 0 ? dataList.map((itemRow, indexRow) => {
                                return (
                                    <tr key={indexRow}>
                                        {
                                            tableConf.map((itemCol, indexCol) => {
                                                return (
                                                    <td key={indexRow + indexCol} style={{textAlign: itemCol.align || 'left'}}>
                                                        {/* {itemRow[itemCol.key]} */}
                                                        {
                                                            itemCol.render ? itemCol.render(itemRow) : itemRow[itemCol['key']]
                                                        }
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            }) :
                                <tr>
                                    <td colSpan={props.tableConf.length} className={`table-no-data`}>
                                        <div className="no-data">
                                            {/* <img src={NodataImg} alt="" /> */}
                                            {/* <XIcon type="no-data" /> */}
                                            <div className="no-data-msg">暂无数据</div>
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
            {
                !noPagination && <div className="x-pagination-wrapper">
                    <span className="total-info">共 {count} 条</span>
                    <XPagination
                        count={count}
                        pageSize={pageSize}
                        currPage={currPage}
                        onPageChange={(res) => {
                            props.onPageChange(res)
                        }}
                    />
                </div>
            }
        </div>
    )
}

export default XTable;

XTable.propTypes = {
    noPagination: PropTypes.bool,
    onPageChange: PropTypes.func,
    onOrderChange: PropTypes.func,
    size: PropTypes.string,
    pageSize: PropTypes.number,
    dataList: PropTypes.array
};

XTable.defaultProps = {
    noPagination: false,
    onPageChange:()=>{},
    onOrderChange: ()=>{},
    pageSize: 10,
    dataList: []
};
