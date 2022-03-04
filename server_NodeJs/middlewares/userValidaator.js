exports.userSignUpValidator = (req, res, next) => {

    req.check('firstname', 'firstname is Required !').notEmpty();
    req.check('lastname', 'lastname is Required !').notEmpty();

    req.check('email', 'Email is Required !')
       .notEmpty()
       .isEmail();

    req.check('password', 'Password is Required !')
       .notEmpty()
       .isLength({min: 6})
       .withMessage('Password must between 6 and 10 Caracters')
    
    const errors = req.validationErrors()

    if(errors) 
    {
        return res.status(400).json(errors)
    }

    next()
}