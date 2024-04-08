const isFileTypeSupported=(fileType, supportedTypes=['png', 'jpg', 'jpeg','mp4','mv'])=> {
    return supportedTypes.includes(fileType);
}

module.exports = isFileTypeSupported;