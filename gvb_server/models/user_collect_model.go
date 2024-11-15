package models

import "time"

//User2Collects自定义的第三章表 记录用户什么时候收藏了什么文章
type UserCollectModel struct {
	UserID    uint
	UserModel UserModel `gorm:"foreignKey:UserID"`
	ArticleID string    `gorm:"size:32"`
	CreateAt  time.Time
}
