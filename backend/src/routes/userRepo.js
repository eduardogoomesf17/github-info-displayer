import { Router } from 'express';

import userRepoController from '../controllers/userRepo';

const router = new Router();

router.get('/:id', userRepoController.show);

export default router;
