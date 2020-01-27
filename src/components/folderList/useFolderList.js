import React, { useState, useEffect } from 'react';
import { ExternalDirectoryPath, readDir } from '../../utils/file'
export default function (userId) {
    const currentPath = ExternalDirectoryPath + `/${userId}`
    const [listStack, setListStack] = useState([]);
    const [folderList, setFolderList] = useState([]);
    const [status, setStatus] = useState('loading');
    const [isRoot, setIsRoot] = useState(true);
    useEffect(() => {
        readDir(currentPath).then(res => {
            setStatus('success')
            setFolderList(res)
            setListStack([folderList])
        }).catch(err => {
            setStatus('fail')
            setFolderList([])
        })
    }, [])
    useEffect(() => {
        setIsRoot(listStack.length <= 1)
    }, [listStack])
    const viewFiles = (index, callback) => {
        let pressItem = folderList[index]
        let path = pressItem.path
        if (pressItem.isFile()) {
            callback(pressItem)
        } else {
            setStatus('loading')
            readDir(path).then(res => {
                setStatus('success')
                setFolderList(res)
                setListStack([ ...listStack, folderList])
            }).catch(err => {
                setStatus('fail')
                setFolderList([])
            })
        }

    }
    const back = () => {
        setListStack(listStack.splice(0, listStack.length - 1))
        setFolderList(listStack[listStack.length - 1])
    }
    return {
        folderList,
        status,
        isRoot,
        viewFiles,
        back
    };
}