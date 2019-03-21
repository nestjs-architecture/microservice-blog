const SUBJECTS = {
    all: {
        name: 'all'
    },
    article: {
        name: "Article",
        conditionFieldName: "authorId"
    },
    comment: {
        name: "Comment",
        conditionFieldName: "authorId"
    },
    user: {
        name: "User",
        conditionFieldName: "id"
    },
}

const ACTIONS = {
    manage: 'manage',
    read: 'read',
    create: 'create',
    update: 'update',
    delete: 'delete'
}

const ROLE_TYPES = {
    admin: {
        name: "admin",
        permissions: [
            {
                subject: SUBJECTS.all,
                actions: [ACTIONS.manage]
            }
        ]
    },
    user: {
        name: "user",
        permissions: [
            {
                subject: SUBJECTS.article,
                actions: [ACTIONS.manage]
            },
            {
                subject: SUBJECTS.comment,
                actions: [ACTIONS.manage]
            },
            {
                subject: SUBJECTS.user,
                actions: [ACTIONS.manage]
            },
        ]
    }
}

module.exports = {
    SUBJECTS,
    ACTIONS,
    ROLE_TYPES,
}