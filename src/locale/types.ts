/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {AccordionLocaleT} from '../accordion/locale';
import {BreadcrumbLocaleT} from '../breadcrumbs/locale';
import {DatepickerLocaleT} from '../datepicker/locale';
import {ButtonGroupLocaleT} from '../button-group/locale';
import {FileUploaderLocaleT} from '../file-uploader/locale';
import {MenuLocaleT} from '../menu/locale';
import {ModalLocaleT} from '../modal/locale';
import {DrawerLocaleT} from '../drawer/locale';
import {PaginationLocaleT} from '../pagination/locale';
import {SelectLocaleT} from '../select/locale';
import {ToastLocaleT} from '../toast/locale';

export type LocaleT = {
  accordion: AccordionLocaleT;
  breadcrumbs: BreadcrumbLocaleT;
  datepicker: DatepickerLocaleT;
  buttongroup: ButtonGroupLocaleT;
  fileuploader: FileUploaderLocaleT;
  menu: MenuLocaleT;
  modal: ModalLocaleT;
  drawer: DrawerLocaleT;
  pagination: PaginationLocaleT;
  select: SelectLocaleT;
  toast: ToastLocaleT;
};
