
import React from 'react';
import * as Styles from './Style';

export const Breadcrumb = React.memo((props) => {
    return <Styles.Container>{props.title}</Styles.Container>
});