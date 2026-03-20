import WalletController from "../../controllers/wallet/index.js";
import express from "express";

const api = "";
class WalletRoutes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(
            `${api}/wallet/`,
            WalletController.createWalletEntry
        );
        //all user transactions
        this.router.post(
            `${api}/wallet/transactions/user/:userId`,
            WalletController.getWalletEntriesByUserId
        );
        //user's total money in all chamaas
        this.router.get(
            `${api}/wallet/user/balance/:userId`,
            WalletController.getWalletBalanceByUserId
        );
        //user's balance in a chamaa
        this.router.get(
            `${api}/wallet/user/balance/:userId/:chamaaId`,
            WalletController.getWalletBalanceByUserIdChamaa_id
        );
        //user's transactions in chamaa
        this.router.post(
            `${api}/wallet/user/transactions/chamaa`,
            WalletController.getWalletEntriesByUserIdChamaaID
        );
        
      
        this.router.put(
            `${api}/wallet/:id`,
            WalletController.updateWalletEntry
        );
        this.router.post(
            `${api}/wallet/transactions/chamaa/:id`,
            WalletController.getChamaaTransactions
        );
        this.router.get(
            `${api}/wallet/balance/chamaa/:chamaaId`,
            WalletController.getTotalBalnceByChamaaId
        );
        this.router.get(
            `${api}/wallet/transactions/chamaa/:chamaaId`,
            WalletController.sumCreditsByChamaaId
        );
    }
}

const newRouter = new WalletRoutes();
const walletRoute = newRouter.router;
export default walletRoute;