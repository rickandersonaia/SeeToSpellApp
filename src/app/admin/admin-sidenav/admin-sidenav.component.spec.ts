import {AdminSidenavComponent} from './admin-sidenav.component';

describe('AdminSidenavComponent', () => {
  let sut: any;

  beforeEach(() => {
    sut = new AdminSidenavComponent();
    sut.currentUser = {_id: 'testid'};
  });

  describe('ngOnInit', () => {

    it('shoud assign this.adminLinks with array value', () => {
      sut.ngOnInit();
      expect(sut.adminLinks.length).toEqual(3);
    });

    it('should assign this.adminLinks array item with acount link with correct user id', () => {
      sut.ngOnInit();
      expect(sut.adminLinks[0].link.includes(sut.currentUser._id)).toBeTruthy();
    });

  });
});
