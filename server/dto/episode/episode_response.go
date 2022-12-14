package episodesdto

type EpisodeResponse struct {
	Title         string `json:"title_episode" form:"title" gorm:"type: varchar(255)"`
	ThumbnailFilm string `json:"thumbnailfilm" form:"thumbnailfilm" gorm:"type: varchar(255)"`
	LinkFilm      string `json:"linkfilm" gorm:"type:text" form:"linkfilm"`
	FilmID        int    `json:"filmid" gorm:"type:int"`
}
