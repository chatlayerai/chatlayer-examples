const createButtonMenuMessage = () => {
    return {
        buttonTemplate: {
            textMessages: [
                {
                    text: "Random Message One"
                },
                {
                    text: "Random Message Two"
                }
            ],
            buttons: [
                {
                    urlButton: {
                        title: "Visit Chatlayer.ai",
                        url: "https://www.chatlayer.ai"
                    }
                },
                {
                    phoneNumberButton: {
                        title: "Call Chatlayer",
                        phoneNumber: "phoneNumber"
                    }
                },
                {
                    postBackButton: {
                        title: "More info",
                        payload: {
                            nextDialogstateId: "71001a34-c557-40a1-8635-969ac4f8a3e6",
                            sessionDataToSet: [
                                {
                                    key: "test",
                                    value: "test"
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
}

const createTextMessage = () => {
    return {
        textMessageTemplate: {
            textMessages: [
                {
                    text: "Random Message One"
                }
            ]
        }

    }
}

const createAttachmentMessage = () => {
    return {
        attachmentTemplate: {
            media: {
                url: "https://via.placeholder.com/150",
                type: "image"
            }
        }
    }
}

const createListTemplateMessage = () => {
    return {
        listTemplate: {
            size: "LARGE",
            button: {
                urlButton: {
                    title: "Visit the docs",
                    url: "https://docs.chatlayer.ai"
                }
            },
            elements: [
                {
                    button: {
                        urlButton: {
                            title: "Visit the docs",
                            url: "https://docs.chatlayer.ai"
                        }
                    },
                    imageUrl: "https://via.placeholder.com/400",
                    title: "Visit Chatlayer.ai Docs",
                    subTitle: "This is a subTitle"
                },
                {
                    button: {
                        urlButton: {
                            title: "Visit the website",
                            url: "https://chatlayer.ai"
                        }
                    },
                    imageUrl: "https://via.placeholder.com/400",
                    title: "Visit Chatlayer.ai Website"
                }
            ]
        }
    }
}

const createCarouselTemplateMessage = () => {
    return {
        carouselTemplate: {
            elements: [
                {
                    buttons: [
                        {
                            urlButton: {
                                title: "Visit the docs",
                                url: "https://docs.chatlayer.ai"
                            }
                        }
                    ],
                    imageUrl: "https://via.placeholder.com/400",
                    title: "Visit Chatlayer.ai Docs",
                    subTitle: "This is a subTitle"
                },
                {
                    buttons: [
                        {
                            urlButton: {
                                title: "Visit the website",
                                url: "https://chatlayer.ai"
                            }
                        }
                    ],
                    imageUrl: "https://via.placeholder.com/400",
                    title: "Visit Chatlayer.ai Website"
                }
            ]
        }
    }
}

const createQuickReplyMessage = () => {
    return {
        quickReplyTemplate: {
            textMessages: [
                {
                    text: "Random Message One"
                },
                {
                    text: "Random Message Two"
                }
            ],
            quickReplies: [
                {
                    imageUrl: "https://via.placeholder.com/10",
                    title: "Set A",
                    payload: {
                        nextDialogstateId: "71001a34-c557-40a1-8635-969ac4f8a3e6",
                        sessionDataToSet: [
                            {
                                key: "a",
                                value: "a"
                            }
                        ]
                    }
                },
                {
                    imageUrl: "https://via.placeholder.com/10",
                    title: "Set B",
                    payload: {
                        nextDialogstateId: "71001a34-c557-40a1-8635-969ac4f8a3e6",
                        sessionDataToSet: [
                            {
                                key: "b",
                                value: "b"
                            }
                        ]
                    }
                },
                {
                    imageUrl: "https://via.placeholder.com/10",
                    title: "Set C",
                    payload: {
                        nextDialogstateId: "71001a34-c557-40a1-8635-969ac4f8a3e6",
                        sessionDataToSet: [
                            {
                                key: "C",
                                value: "C"
                            }
                        ]
                    }
                }
            ]
        }
    }
}

module.exports = {
    createButtonMenuMessage,
    createCarouselTemplateMessage,
    createTextMessage,
    createListTemplateMessage,
    createAttachmentMessage,
    createQuickReplyMessage
}
