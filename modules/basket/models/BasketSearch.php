<?php

namespace app\modules\basket\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;

/**
 * BasketSearch represents the model behind the search form about `app\models\Basket`.
 */
class BasketSearch extends BasketLg
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'user_id', 'last_update', 'delivery_id', 'address_id', 'payment_id', 'status'], 'integer'],
            [['session_id'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = BasketLg::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'last_update' => $this->last_update,
            'delivery_id' => $this->delivery_id,
            'address_id' => $this->address_id,
            'payment_id' => $this->payment_id,
            'status' => $this->status,
        ]);

        $query->andFilterWhere(['like', 'session_id', $this->session_id]);

        return $dataProvider;
    }

    public function searchAbandonedBasket($params){
        $query = Basket::find()->where(['status' => 0])->andWhere(['>','user_id',0])->orderBy('last_update DESC');

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'last_update' => $this->last_update,
            'delivery_id' => $this->delivery_id,
            'address_id' => $this->address_id,
            'payment_id' => $this->payment_id,
            'status' => $this->status,
        ]);

        $query->andFilterWhere(['like', 'session_id', $this->session_id]);

        return $dataProvider;
    }

    public function searchMasterPayBasket($params){
        $query = BasketLg::find()
            ->orderBy('last_update DESC')
//            ->leftJoin('basket_products',' basket_products.basket_id = basket.id')
            ->where(['basket.status' => 1])
            //->andWhere(['>','is_master_tool(id)',0])
            ->andWhere(['>','basket.user_id',0])
//            ->where(['>','basket_products.tool',0])
;//            ->groupBy('basket_products.basket_id');

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'user_id' => $this->user_id,
            'last_update' => $this->last_update,
            'delivery_id' => $this->delivery_id,
            'address_id' => $this->address_id,
            'payment_id' => $this->payment_id,
            'status' => $this->status,
        ]);

        $query->andFilterWhere(['like', 'session_id', $this->session_id]);

        return $dataProvider;
    }
}
