import React, { useState, useEffect } from 'react';
import { CardData } from './types';
import moment from 'moment';
import { motion, AnimatePresence } from 'framer-motion';
import { Comment, Tooltip, Avatar, Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


const CommentCard = (props: { card: CardData, deleteCard: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const actions = [<span key="comment-basic-reply-to">Click to expand</span>]

    // ComponentWillUnmount
    useEffect(() => {

        return () => {
            alert("Deleted card")
        }
    }, [])

    return (
        <motion.li layout onClick={toggleOpen}>
            <Card className="card">
                <Comment className="comment"
                    actions={actions}
                    author={<a>{props.card.authorName}</a>}
                    avatar={
                        <Avatar
                            src={props.card.authorImage}
                            alt={props.card.authorName}
                        />
                    }
                    content={
                        <motion.p>
                            {props.card.title}
                            < br />
                            <AnimatePresence>
                                <motion.span layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    {isOpen && props.card.content}
                                </motion.span>
                            </AnimatePresence>
                        </motion.p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                />
                <Button className="button-delete" type="primary" danger onClick={props.deleteCard}><DeleteOutlined /></Button>
            </Card >

        </motion.li>
    );
}

export default CommentCard;