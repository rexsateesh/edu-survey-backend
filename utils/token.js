const jwt = require('jsonwebtoken');
const secretKey = 'RW*Syu:Qd7mtRt/2d<9V++z[Y}$:dv.e`%Uc7r-6yH$P/dS$(tVpJH-In`Q^|mO=';

const token = {
    generate: (signDetails) => {
        return jwt.sign(signDetails, secretKey, {expiresIn: (60 * 60 * 24 * 7) });
    },

    verify: (token) => {
        try {
            return jwt.verify(token, secretKey);
        } catch(err) {
            return;
        }
    }
};

module.exports = token;