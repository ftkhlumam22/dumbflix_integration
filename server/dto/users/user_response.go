package usersdto

type UserResponse struct {
	ID       int             `json:"id"`
	Email    string          `json:"email"`
	Password string          `json:"password"`
	Profile  ProfileResponse `json:"profile"`
}

type ProfileResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"full_name"`
	Phone    string `json:"phone"`
	Gender   string `json:"gender"`
	Address  string `json:"address"`
}
