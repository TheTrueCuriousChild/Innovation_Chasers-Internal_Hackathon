import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { userId, role }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ msg: 'Admins only' });
  next();
};
